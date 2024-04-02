package mx.edu.utez.az3dtour.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ApiResponse<T> {

    private T data;

    private boolean error;

    private int status;

    String message;
}
