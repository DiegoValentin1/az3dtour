package mx.edu.utez.az3dtour.model.hostpot;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Hostpot {
    private String id;
    private String type;
    private Double pitch;
    private Double yaw;
    private String text;
}
