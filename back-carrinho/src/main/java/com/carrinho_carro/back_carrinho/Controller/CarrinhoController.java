package com.carrinho_carro.back_carrinho.Controller;

import com.carrinho_carro.back_carrinho.Model.Carrinho;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;

@RestController
@RequestMapping("/api/carrinho")
public class CarrinhoController {
    
    @GetMapping
    public ResponseEntity<List<Carrinho>> getAllCarrinhos() {
        // TODO: Implement fetching all carrinhos
        return ResponseEntity.ok(List.of());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Carrinho> getCarrinhoById(@PathVariable Long id) {
        // TODO: Implement fetching carrinho by id
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Carrinho> createCarrinho(@RequestBody Carrinho carrinho) {
        // TODO: Implement creating new carrinho
        return ResponseEntity.ok(carrinho);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Carrinho> updateCarrinho(@PathVariable Long id, @RequestBody Carrinho carrinho) {
        // TODO: Implement updating carrinho
        return ResponseEntity.ok(carrinho);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCarrinho(@PathVariable Long id) {
        // TODO: Implement deleting carrinho
        return ResponseEntity.noContent().build();
    }
}
