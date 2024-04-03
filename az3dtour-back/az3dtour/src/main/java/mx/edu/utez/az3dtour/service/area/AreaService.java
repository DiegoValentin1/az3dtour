package mx.edu.utez.az3dtour.service.area;

import lombok.RequiredArgsConstructor;
import mx.edu.utez.az3dtour.controller.area.dto.AreaCreateDto;
import mx.edu.utez.az3dtour.controller.area.dto.UpdateSceneDto;
import mx.edu.utez.az3dtour.controller.area.dto.UpdateSubDto;
import mx.edu.utez.az3dtour.model.area.Area;
import mx.edu.utez.az3dtour.model.area.AreaRepository;
import mx.edu.utez.az3dtour.utils.ApiResponse;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor

public class AreaService {
    private final AreaRepository repository;

    @Transactional(rollbackFor = Exception.class)
    public ApiResponse<Area> create(AreaCreateDto area) {
        Area newArea = new Area();
        String id = UUID.randomUUID().toString();
        newArea.setId(id);
        BeanUtils.copyProperties(area, newArea, "id");
        newArea.initUUID();
        Area saveArea = repository.save(newArea);
        return new ApiResponse<>(
                saveArea, false, 200, "Área registrada correctamente"
        );
    }

    @Transactional(rollbackFor = Exception.class)
    public ApiResponse<Area> updateSub (UpdateSubDto sub, String id) {
        Area area = repository.findById(id).orElse(null);
        if (area != null) {
            area.setSub_teams(sub.getSubTeams());
            Area saveArea = repository.save(area);
            return new ApiResponse<>(
                    saveArea, false, 200, "Sub equipo agregado correctamente"
            );
        } else {
            return new ApiResponse<>(
                    null, true, 400, "Área no encontrada"
            );
        }
    }

    @Transactional(rollbackFor = Exception.class)
    public ApiResponse<Area> updateScene (UpdateSceneDto scene, String id) {
        Area area = repository.findById(id).orElse(null);
        if (area != null) {
            area.setScenes(scene.getScenes());
            Area saveArea = repository.save(area);
            return new ApiResponse<>(
                    saveArea, false, 200, "Escena agregada correctamente"
            );
        } else {
            return new ApiResponse<>(
                    null, true, 400, "Área no encontrada"
            );
        }
    }

    @Transactional(readOnly = true)
    public ApiResponse<List<Area>> getAll() {
        List<Area> areas = repository.findAll();
        if (areas.isEmpty()) {
            return new ApiResponse<>(
                    null, true, 400, "No hay áreas registradas"
            );
        } else {
            return new ApiResponse<>(
                    areas, false, 200, "Áreas encontradas"
            );
        }
    }

    @Transactional(readOnly = true)
    public ApiResponse<Area> getById(String id) {
        Area area = repository.findById(id).orElse(null);
        if (area != null) {
            return new ApiResponse<>(
                    area, false, 200, "Area encontrada"
            );
        } else {
            return new ApiResponse<>(
                    null, true, 400, "Area no encontrada"
            );
        }
    }

    @Transactional(rollbackFor = Exception.class)
    public ApiResponse<Area> delete(String id) {
        Area area = repository.findById(id).orElse(null);
        if (area != null) {
            repository.delete(area);
            return new ApiResponse<>(
                    area, false, 200, "Area eliminada correctamente"
            );
        } else {
            return new ApiResponse<>(
                    null, true, 400, "Area no encontrada"
            );
        }
    }
 }
