package mx.edu.utez.az3dtour.controller.user;

import lombok.RequiredArgsConstructor;
import mx.edu.utez.az3dtour.model.user.User;
import mx.edu.utez.az3dtour.service.user.UserService;
import mx.edu.utez.az3dtour.utils.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api-az/user")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor

public class UserController {

    private final UserService service;

    @GetMapping("/getAll")
    public ResponseEntity<ApiResponse<List<User>>> getAll () {
        try {
            ApiResponse<List<User>> response = service.getAll();
            HttpStatus statusCode = response.isError() ? HttpStatus.BAD_REQUEST : HttpStatus.OK;
            return new ResponseEntity<>(
                    response,
                    statusCode
            );
        } catch (Exception e) {
            return new ResponseEntity<>(
                    new ApiResponse<>(
                            null, true, 500, e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

}
