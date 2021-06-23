package com.launchacademy.reviews.services;

import com.launchacademy.reviews.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
  private ReviewRepository reviewRepository;

  @Autowired
  public ReviewService(ReviewRepository reviewRepository) {
    this.reviewRepository = reviewRepository;
  }
}
