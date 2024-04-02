package mx.edu.utez.az3dtour.service.user;

import lombok.RequiredArgsConstructor;
import mx.edu.utez.az3dtour.model.user.User;
import mx.edu.utez.az3dtour.model.user.UserRepository;
import mx.edu.utez.az3dtour.utils.ApiResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor


public class UserService {

    private final UserRepository repository;

    @Transactional(readOnly = true)
    public ApiResponse<List<User>> getAll() {
        List<User> users = repository.findAll();
        if (users.isEmpty()) {
            return new ApiResponse<>(
                    users, true, 400, "No hay usuarios registrados"
            );
        } else {
            return new ApiResponse<>(
                    users, false, 200, "Usuarios encontrados"
            );
        }
    }

    @Transactional(readOnly = true)
    public ApiResponse<User> findById(String id) {
        Optional<User> optionalUser = repository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            return new ApiResponse<>(
                    user, false, 200, "Usuario encontrado"
            );
        } else {
            return new ApiResponse<>(
                    null, true, 400, "Usuario no encontrado"
            );
        }
    }

    @Transactional(readOnly = true)
    public Optional<User> findByUsername(String username) {
        return repository.findByUsername(username);
    }
}
