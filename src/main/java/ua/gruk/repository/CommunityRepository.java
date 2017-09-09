package ua.gruk.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ua.gruk.model.entity.Community;

public interface CommunityRepository extends JpaRepository<Community, Integer> {
    
    List<Community> findTop7ByCommunityNameStartingWithIgnoreCase(String nameStart);

}
