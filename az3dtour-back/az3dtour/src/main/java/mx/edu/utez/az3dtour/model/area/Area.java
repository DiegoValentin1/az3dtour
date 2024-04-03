package mx.edu.utez.az3dtour.model.area;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mx.edu.utez.az3dtour.model.hostpot.Hostpot;
import mx.edu.utez.az3dtour.model.scene.Scene;
import mx.edu.utez.az3dtour.model.subteam.SubTeam;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Data
@Document(collection = "areas")
@NoArgsConstructor
@AllArgsConstructor

public class Area {
    @Id
    private String id;
    private String name_of_the_area;
    private String main_goal_of_the_area;
    private String main_lead_name;
    private String web_link_area;
    private List<SubTeam> sub_teams;
    private List<Scene> scenes;

    public void initUUID() {
        if (scenes != null) {
            for (Scene scene : scenes) {
                scene.setId(UUID.randomUUID().toString());
                if (scene.getHotspots() != null) {
                    for (Hostpot hostpot : scene.getHotspots()) {
                        hostpot.setId(UUID.randomUUID().toString());
                    }
                }
            }
        }
    }
}
