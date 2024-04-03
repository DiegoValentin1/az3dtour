package mx.edu.utez.az3dtour.controller.area.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mx.edu.utez.az3dtour.model.scene.Scene;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UpdateSceneDto {
    List<Scene> scenes;
}
