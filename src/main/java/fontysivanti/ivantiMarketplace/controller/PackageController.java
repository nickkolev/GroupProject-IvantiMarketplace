package fontysivanti.ivantiMarketplace.controller;

import fontysivanti.ivantiMarketplace.model.Package;
import fontysivanti.ivantiMarketplace.service.PackageService;
import fontysivanti.ivantiMarketplace.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin
@RequestMapping("/packages")
public class PackageController {

    @Autowired
    private final PackageService packageService;

    @GetMapping("/hello")
    @ResponseBody
    public String SayHello() {
        return "Hello, your resources work!";
    }

    @GetMapping
    public ResponseEntity</*byte[]*/List<Package>> getAllPackages() /*throws IOException */{
        List<Package> packages = packageService.getAllPackages();

        //File file = new File("README.md"); //wasnt me
        if (packages != null) {
            return ResponseEntity.ok().body(/*Files.readAllBytes(file.toPath())*/packages );
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<Package> getPackage(@PathVariable(value = "id") String id) {
        Package packageApp = packageService.getPackageById(id);

        if (packageApp != null) {
            return ResponseEntity.ok().body(packageApp);
        } else {
            return new ResponseEntity("Package with ID " + id + " does not exists.", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping()
    public ResponseEntity<Package> createPackage(@RequestBody Package pack) {
        Package created = packageService.addPackage(pack);

        if (created == null) {
            String entity = "Package with ID " + pack.getId() + " already exists.";
            return new ResponseEntity(entity, HttpStatus.CONFLICT);
        }

        String url = "package" + "/" + created.getId();
        URI uri = URI.create(url);
        return new ResponseEntity(uri, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<Package> updatePackage(
            @PathVariable("id") String id, @RequestBody Package pack) {
        Package old = packageService.getPackageById(id);

        if (old == null) {
            return new ResponseEntity("Package not found.", HttpStatus.NOT_FOUND);
        }

        old.setName(pack.getName());
        old.setDescription(pack.getDescription());
        old.setPrice(pack.getPrice());
        old.setSize(pack.getSize());

        Package updated = packageService.updatePackage(old);
        return ResponseEntity.ok().body(updated);
    }

    @DeleteMapping("{id}")
    public ResponseEntity deletePackage(@PathVariable String id) {
        Package pack = packageService.getPackageById(id);

        if(pack == null){
            return new ResponseEntity("Package not found.", HttpStatus.NOT_FOUND);
        }

        packageService.deletePackageById(id);
        return ResponseEntity.ok().build();
    }
}
