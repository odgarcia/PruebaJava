/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.osorcorp.beitechbackend.api;

import com.osorcorp.beitechbackend.entities.CustomerOrder;
import com.osorcorp.beitechbackend.entities.CustomerAvailableProduct;
import com.osorcorp.beitechbackend.entities.OrderDetail;
import com.osorcorp.beitechbackend.repositories.CustomerAvailableProductRepository;
import com.osorcorp.beitechbackend.repositories.CustomerRepository;
import com.osorcorp.beitechbackend.repositories.OrderDetailRepository;
import com.osorcorp.beitechbackend.repositories.OrderRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author oscar
 */
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CustomerAvailableProductRepository customerAvailableProductRepository;

    @Autowired
    OrderDetailRepository orderDetailRepository;

    /**
     * 
     * @param order
     * @return 
     */    
    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity createOrder(@RequestBody CustomerOrder order) {

        if (order == null) {
            return ResponseEntity.badRequest().body("Datos Incorrectos");
        }
        if (order.getDetails() == null) {
            return ResponseEntity.badRequest().body("Detalle en la orden requeridos");
        }

        int countProducts = 0;
        for (OrderDetail detail : order.getDetails()) {
            if (detail.getQuantity() == 0) {
                return ResponseEntity.badRequest().body("La cantidad de producto debe ser mayor a cero");
            }
            countProducts += detail.getQuantity();
        }
        
        if (countProducts > 5) {
            return ResponseEntity.badRequest().body("Máximo 5 productos por orden");
        }

        //Se valida los productos del cliente
        
        List<CustomerAvailableProduct> availableProducts = customerAvailableProductRepository.findByCustomer(order.getCustomer());
        double total = 0;
        for (OrderDetail detail : order.getDetails()) {
            boolean exists = false;
            for (CustomerAvailableProduct availableProduct : availableProducts) {
                if (detail.getProduct().getId().equals(availableProduct.getProduct().getId())) {
                    double price = detail.getQuantity() * availableProduct.getProduct().getPrice();
                    detail.setPrice(price);
                    total += price;
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                return ResponseEntity.badRequest().body("Seleccionar este producto no es permitido para este cliente");
            }
        }
        order.setTotal(total);

        order.getDetails().forEach((detail) -> {
            detail.setCustomerOrder(order);
        });

        orderRepository.save(order);
        return ResponseEntity.ok().build();
    }
}

