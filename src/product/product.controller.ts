import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    async all() {
        return this.productService.all();
    }

    @EventPattern('product_created')
    async create(product: any) {
        this.productService.create({
            id: product.id,
            title: product.title,
            content: product.content
        })
    }

    @EventPattern('product_updated')
    async update(product: any) {
        this.productService.update(product.id, {
            title: product.title,
            content: product.content
        })
    }

    @EventPattern('product_deleted')
    async delete(id: number) {
        this.productService.delete(id)
    }
}
