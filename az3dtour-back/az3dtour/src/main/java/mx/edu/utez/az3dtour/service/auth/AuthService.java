package mx.edu.utez.az3dtour.service.auth;

import lombok.RequiredArgsConstructor;
import mx.edu.utez.az3dtour.controller.auth.dto.SignDto;
import mx.edu.utez.az3dtour.controller.auth.dto.SignedDto;
import mx.edu.utez.az3dtour.controller.user.dto.UserDto;
import mx.edu.utez.az3dtour.model.user.User;
import mx.edu.utez.az3dtour.model.user.UserRepository;
import mx.edu.utez.az3dtour.security.jwt.JwtProvider;
import mx.edu.utez.az3dtour.security.service.UserDetailsServiceImpl;
import mx.edu.utez.az3dtour.service.user.UserService;
import mx.edu.utez.az3dtour.utils.ApiResponse;
import org.springframework.beans.BeanUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor

public class AuthService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final UserService service;
    private final AuthenticationManager manager;
    private final UserDetailsServiceImpl userDetailsService;
    private final JwtProvider provider;


    @Transactional(rollbackFor = Exception.class)
    public ApiResponse<User> create (UserDto user) {
        User newUser = new User();
        String id = UUID.randomUUID().toString();
        newUser.setId(id);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        BeanUtils.copyProperties(user, newUser);
        newUser.setBlocked(true);
        newUser.setStatus(true);
        User saveUser = repository.save(newUser);
        return new ApiResponse<>(
                saveUser, false, 200, "Usuario creado"
        );
    }

    @Transactional(readOnly = true)
    public ApiResponse<SignedDto> signIn (SignDto user) {
        try {
            Optional<User> foundUser = service.findByUsername(user.getUsername());
            if (foundUser.isEmpty())
                return new ApiResponse<>(
                        null, true, 404, "Usuario no encontrado"
                );
            User userFound = foundUser.get();
            if (Boolean.FALSE.equals(userFound.getStatus()))
                return new ApiResponse<>(
                        null, true, 403, "Usuario inactivo"
                );
            if (Boolean.FALSE.equals(userFound.getBlocked()))
                return new ApiResponse<>(
                        null, true, 403, "Usuario bloqueado"
                );
            Authentication auth = manager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(auth);
            UserDetails userDetails = userDetailsService.loadUserByUsername(user.getUsername());
            String token = provider.generateToken(userDetails);
            SignedDto signedDto = new SignedDto(token, userFound);
            return new ApiResponse<>(
                    signedDto, false, 200, "Login correcto!"
            );
        } catch (Exception e) {
            String message = "Credenciales incorrectas";
            if (e instanceof DisabledException)
                message = "Usuario deshabilitado";
            return new ApiResponse<>(
                    null, true, 400, message
            );
        }
    }
}
