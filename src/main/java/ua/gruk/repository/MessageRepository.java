package ua.gruk.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ua.gruk.model.entity.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {
    
    List<Message> getMessageBySenderIdOrReceiverId(long senderId, long receiverId);
    
    List<Message> getMessageByPairKey(String pairKey);
    
    @Query("select distinct m.pairKey from Message m where m.sender.id=:id or m.receiver.id=:id")
    List<String> getPairKeys(@Param("id") long id);
    
    @Modifying
    @Transactional
    @Query("update Message m set m.red=?1 where m.pairKey = ?2")
    public void setRed(boolean red, String pairKey);
    
    @Modifying
    @Transactional
    @Query("update Message m set m.red=?1 where m.pairKey in ?2")
    public void setReds(boolean red, List<String> pairKeys);
    
    @Query("select count(*) from Message m where m.receiver.id = ?1 and m.red=?2")
    public int countUnred(long id, boolean red);

}
