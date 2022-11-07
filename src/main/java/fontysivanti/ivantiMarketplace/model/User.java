package fontysivanti.ivantiMarketplace.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String name;
    @Indexed(unique = true)
    private String email;
    private UserType userType;
    private int age;

    public User(String name, String email, UserType userType, int age) {
        this.name = name;
        this.email = email;
        this.userType = userType;
        this.age = age;
    }
}
