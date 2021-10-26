import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

    async all(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async create(data): Promise<Product> {
        return new this.productModel(data).save();
    }

    async getById(id: number): Promise<Product> {
        return this.productModel.findOne({ id });
    }

    async update(id: number, data): Promise<Product> {
        return this.productModel.findOneAndUpdate({ id }, data)
    }

    async delete(id: number): Promise<void> {
        this.productModel.deleteOne({id});
    }
}
