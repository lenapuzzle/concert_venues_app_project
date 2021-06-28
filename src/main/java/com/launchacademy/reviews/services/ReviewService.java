package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.repositories.ReviewRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
  private ReviewRepository reviewRepository;

  @Autowired
  public ReviewService(ReviewRepository reviewRepository) {
    this.reviewRepository = reviewRepository;
  }

  public Review save(Review review) {
    return reviewRepository.save(review);
  }

  public List<Review> findAll() {
    return (List<Review>) reviewRepository.findAll();
  }

  public long count() {
    return reviewRepository.count();
  }

  public void delete(Review review) {
    reviewRepository.delete(review);
  }

  public Optional<Review> findById(Integer id) {
    return reviewRepository.findById(id);
  }
}
