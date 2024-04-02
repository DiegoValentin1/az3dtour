package mx.edu.utez.az3dtour.controller.role;

import lombok.RequiredArgsConstructor;
import mx.edu.utez.az3dtour.controller.role.dto.RoleDto;
import mx.edu.utez.az3dtour.model.role.Role;
import mx.edu.utez.az3dtour.service.role.RoleService;
import mx.edu.utez.az3dtour.utils.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api-az/role")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor

public class RoleController {

    private final RoleService service;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<Role>> create (@RequestBody RoleDto role) {
        try {
            ApiResponse<Role> response = service.create(role);
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

    @GetMapping("/getAll")
    public ResponseEntity<ApiResponse<List<Role>>> getAll () {
        try {
            ApiResponse<List<Role>> response = service.getAll();
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
