package com.launchacademy.reviews.errorHandlers;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.Getter;
import lombok.Setter;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

@Getter
@Setter
public class ErrorDetails {
  private Date timestamp;
  private String message;
  private Map<String, String> errors;

  public ErrorDetails(Date timestamp, Map<String, String> errors, String message) {
    this.timestamp = timestamp;
    this.message = message;
    this.errors = errors;
  }

  public static Map<String, String> populateErrors(BindingResult bindingResult) {
    Map<String,String> errorMap = new HashMap<>();
    List<FieldError> fieldErrorList = bindingResult.getFieldErrors();
    for (FieldError fieldError: fieldErrorList ){
      errorMap.put(fieldError.getField(), fieldError.getDefaultMessage());
      System.out.println(fieldError.getField());
      System.out.println(fieldError.getDefaultMessage());
    }
    return errorMap;
  }
}
