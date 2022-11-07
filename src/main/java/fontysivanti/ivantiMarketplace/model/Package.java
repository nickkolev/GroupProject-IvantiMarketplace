package fontysivanti.ivantiMarketplace.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "packages")
public class Package {
    @Id
    private String id;
    private String name;
    private String description;
    private double size;
    private double price;
    private String url;

    public Package(
            String name,
            String description,
            double size,
            double price,
            String url) {
        this.name = name;
        this.description = description;
        this.size = size;
        this.price = price;
        this.url = url;
    }
}