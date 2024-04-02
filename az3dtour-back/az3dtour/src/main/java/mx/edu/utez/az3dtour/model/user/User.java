package mx.edu.utez.az3dtour.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mx.edu.utez.az3dtour.model.role.Role;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users")
@NoArgsConstructor
@AllArgsConstructor

public class User {
    @Id
    private String id;

    private String username;

    @JsonIgnore
    private String password;

    @DBRef(lazy = true)
    private Role role;

    private Boolean blocked;

    private Boolean status;

}
