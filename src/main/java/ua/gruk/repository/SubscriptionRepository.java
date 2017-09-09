package ua.gruk.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import ua.gruk.model.entity.Subscription;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    
    Optional<Subscription> findByPairKey(String pairKey);
    
    List<Subscription> getSubscriptionByFirstCitizenIdAndIsFirstSubscriberIsTrueOrSecondCitizenIdAndIsSecondSubscriberIsTrue(long firstCitizenId, long secondCitizenId);
    
    List<Subscription> getSubscriptionByFirstCitizenIdAndIsSecondSubscriberIsTrueOrSecondCitizenIdAndIsFirstSubscriberIsTrue(long firstCitizenId, long secondCitizenId);
    
    List<Subscription> getSubscriptionByFirstCitizenIdOrSecondCitizenId(long firstCitizenId, long secondCitizenId);
    
    @Modifying
    @Transactional
    @Query("update Subscription s set s.isFirstSubscriber = ?1 WHERE s.pairKey = ?2")
    public void updateFirst(boolean isFirstSubscriber, String pairKey);
    
    @Modifying
    @Transactional
    @Query("update Subscription s set s.isSecondSubscriber = ?1 WHERE s.pairKey = ?2")
    public void updateSecond(boolean isSecondSubscriber, String pairKey);

}
