package ch.hackzurich.axacare.repositories;

import ch.hackzurich.axacare.domain.User;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface UserRepository extends Neo4jRepository<User, Long> {

    User findByName(String name);

}
