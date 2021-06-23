package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.validator.constraints.URL;

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

  @NotBlank
  @Size(max=255)
  @Column(name = "name", nullable = false)
  private String name;

  @NotBlank
  @Size(max=255)
  @Column(name = "city")
  private String city;

  @NotBlank
  @Size(min=2, max=2, message="must be two character representation of state")
  @Column(name = "state")
  private String state;

  @NotBlank
  @Size(max=255)
  @Column(name = "address")
  private String address;

  @Column(name = "zip_code")
  @Size(min=5, max=10, message="must be 5 digit zip code or XXXXX-XXXX full postal zip code format")
  private String zipCode;

  @NotBlank
  @Size(min=12, max=12, message="must be formatted XXX-XXX-XXXX")
  @Column(name = "phone_number")
  private String phoneNumber;

  @Column(name = "capacity")
  private Integer capacity;

  @Column(name = "description")
  private String description;

  @URL(regexp = "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)")
  @NotBlank
  @Size(max=255)
  @Column(name = "img_url")
  private String imgUrl;

  @OneToMany(mappedBy = "venue")
  @JsonIgnoreProperties("venue")
  private List<Review> reviews = new ArrayList<>();
}
