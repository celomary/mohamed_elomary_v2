import { Query, Field } from '@tilework/opus';

const productQueryById = (id) => {
    return new Query('product')
        .addArgument('id', 'String!', id)
        .addFieldList([
            'id',
            'name',
            'inStock',
            'description',
            'category',
            'brand'
        ])
        .addField(new Field('gallery', true))
        .addField(
            new Field('prices', true)
                .addField('amount')
                .addField(new Field('currency').addField('label'))
        )
        .addField(
            new Field('attributes', true)
                .addFieldList(['id', 'name', 'type'])
                .addField(
                    new Field('items', true).addFieldList([
                        'displayValue',
                        'value',
                        'id'
                    ])
                )
        );
};

export default productQueryById;
