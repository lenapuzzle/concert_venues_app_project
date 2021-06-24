package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

  private final ReviewRepository reviewRepository;

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
}
