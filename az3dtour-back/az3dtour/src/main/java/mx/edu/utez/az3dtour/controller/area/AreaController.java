package mx.edu.utez.az3dtour.controller.area;

import lombok.RequiredArgsConstructor;
import mx.edu.utez.az3dtour.controller.area.dto.AreaCreateDto;
import mx.edu.utez.az3dtour.controller.area.dto.UpdateSubDto;
import mx.edu.utez.az3dtour.model.area.Area;
import mx.edu.utez.az3dtour.service.area.AreaService;
import mx.edu.utez.az3dtour.utils.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api-az/area")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor

public class AreaController {

    private final AreaService service;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<Area>> create (@RequestBody AreaCreateDto area) {
        try {
            ApiResponse<Area> response = service.create(area);
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
    public ResponseEntity<ApiResponse<List<Area>>> getAll () {
        try {
            ApiResponse<List<Area>> response = service.getAll();
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

    @GetMapping("/getById/{id}")
    public ResponseEntity<ApiResponse<Area>> getById (@PathVariable("id") String id) {
        try {
            ApiResponse<Area> response = service.getById(id);
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

    @PutMapping("/updateSub/{id}")
    public ResponseEntity<ApiResponse<Area>> updateSub (@RequestBody UpdateSubDto sub, @PathVariable("id") String id) {
        try {
            ApiResponse<Area> response = service.updateSub(sub, id);
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




    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ApiResponse<Area>> delete (@PathVariable("id") String id) {
        try {
            ApiResponse<Area> response = service.delete(id);
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
