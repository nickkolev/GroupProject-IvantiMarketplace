package fontysivanti.ivantiMarketplace;

import fontysivanti.ivantiMarketplace.model.User;
import fontysivanti.ivantiMarketplace.model.UserType;
import fontysivanti.ivantiMarketplace.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;

@SpringBootApplication
public class IvantiMarketplaceApplication {

    public static void main(String[] args) {
        SpringApplication.run(IvantiMarketplaceApplication.class, args);
    }
}
