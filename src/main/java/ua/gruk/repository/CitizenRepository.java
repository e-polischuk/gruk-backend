package ua.gruk.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ua.gruk.model.entity.Citizen;

public interface CitizenRepository extends JpaRepository<Citizen, Long> {
    
    Optional<Citizen> findByEmail(String email);
    
    Page<Citizen> findByCommunityId(int communityId, Pageable pageable);
    
    List<Citizen> findByCommunityId(int communityId);
    
    @Query("select c from Citizen c where c.id!=:id and c.id not in "
    	+ "(select s.firstCitizen.id+s.secondCitizen.id-:id from Subscription s"
    	+ " where s.firstCitizen.id=:id or s.secondCitizen.id=:id)")
    List<Citizen> findFriends(@Param("id") long id);

}
