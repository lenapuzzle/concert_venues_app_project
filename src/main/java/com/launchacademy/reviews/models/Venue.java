package com.launchacademy.reviews.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "concert_venues")
public class Venue {
  @Id
  @SequenceGenerator(name = "concert_venues_generator", sequenceName = "concert_venues_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "concert_venues_generator")

  @Column(name = "id", nullable=false, unique=true)
  private Integer id;


  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "city")
  private String city;

  @Column(name = "state")
  private String state;

  @Column(name = "address")
  private String address;

  @Column(name = "zip_code")
  private String zip;

  @Column(name = "phone_number")
  private String phoneNumber;

  @Column(name = "capacity")
  private Integer capacity;

  @Column(name = "description")
  private String description;

  @Column(name = "img_url")
  private String imgUrl;

}
