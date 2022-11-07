package fontysivanti.ivantiMarketplace.service;

import fontysivanti.ivantiMarketplace.model.User;
import fontysivanti.ivantiMarketplace.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public User getUserByEmail(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public User addUser(User user) {
        return userRepository.insert(user);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUserById(String id){
        userRepository.deleteById(id);
    }
}
