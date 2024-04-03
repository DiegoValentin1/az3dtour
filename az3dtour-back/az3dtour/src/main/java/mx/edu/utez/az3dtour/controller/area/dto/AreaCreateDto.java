package mx.edu.utez.az3dtour.controller.area.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class AreaCreateDto {
    private String name_of_the_area;
    private String main_goal_of_the_area;
    private String main_lead_name;
    private String web_link_area;
}
