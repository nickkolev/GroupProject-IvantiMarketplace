package fontysivanti.ivantiMarketplace.service;

import fontysivanti.ivantiMarketplace.model.Package;
import fontysivanti.ivantiMarketplace.repository.PackageRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PackageService {
    private final PackageRepository packageRepository;

    public List<Package> getAllPackages() {
        return packageRepository.findAll();
    }

    public Package getPackageById(String id) {
        return packageRepository.findById(id).orElse(null);
    }

    public Package addPackage(Package pack) {
        return packageRepository.insert(pack);
    }

    public Package updatePackage(Package pack) {
        return packageRepository.save(pack);
    }

    public void deletePackageById(String id){
        packageRepository.deleteById(id);
    }
}
