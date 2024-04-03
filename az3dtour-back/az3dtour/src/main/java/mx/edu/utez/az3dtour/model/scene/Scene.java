package mx.edu.utez.az3dtour.model.scene;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mx.edu.utez.az3dtour.model.hostpot.Hostpot;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Scene {
    private String id;
    private String title;
    private String image;
    private Double pitch;
    private Double yaw;
    private List<Hostpot> hotspots;
}
