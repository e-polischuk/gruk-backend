package ua.gruk.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ua.gruk.model.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

}
