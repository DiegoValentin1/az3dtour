package mx.edu.utez.az3dtour.model.role;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "roles")
@NoArgsConstructor
@AllArgsConstructor

public class Role {
    @Id
    private String id;

    @NotNull(message = "El campo de nombre rol es obligatorio")
    private String name;

}
