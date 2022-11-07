package fontysivanti.ivantiMarketplace.repository;

import fontysivanti.ivantiMarketplace.model.Package;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PackageRepository extends MongoRepository<Package, String> {

}
