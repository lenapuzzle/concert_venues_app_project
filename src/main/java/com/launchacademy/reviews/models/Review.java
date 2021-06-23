package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="reviews")
public class Review {

  @Id
  @SequenceGenerator(name="review_generator", sequenceName = "reviews_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @NotBlank
  @Column(name = "event_name")
  private String eventName;

  @NotBlank
  @Column(name = "user_name")
  private String userName;

  @Column
  private String text;

  @Min(1)
  @Max(10)
  @Column
  private Integer rating;

  @ManyToOne
  @JoinColumn(name="venue_id", nullable = false)
  @JsonIgnoreProperties("reviews")
  private Venue venue;
}
