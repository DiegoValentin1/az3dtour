package mx.edu.utez.az3dtour.security.service;

import lombok.RequiredArgsConstructor;
import mx.edu.utez.az3dtour.model.user.User;
import mx.edu.utez.az3dtour.security.entity.UserDetailsImpl;
import mx.edu.utez.az3dtour.service.user.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor

public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserService service;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalUser = service.findByUsername(username);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            return UserDetailsImpl.build(user);
        } else {
            throw new UsernameNotFoundException("UserNotFound");
        }
    }

}
