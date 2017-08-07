<?php

namespace GraphAppBundle\Mutation;

use GraphAppBundle\Mutation\Contact\AddContactField;
use GraphAppBundle\Mutation\Hotel\AddAmountHotelsField;
use GraphAppBundle\Mutation\Hotel\AddHotelContactField;
use GraphAppBundle\Mutation\Hotel\AddHotelField;
use Youshido\GraphQL\Config\Object\ObjectTypeConfig;
use Youshido\GraphQL\Type\Object\AbstractObjectType;

class MutationType extends  AbstractObjectType
{

    /**
     * @param ObjectTypeConfig $config
     */
    public function build($config)
    {
        $config->addFields([
            new AddHotelField(),
            new AddAmountHotelsField(),
            new AddHotelContactField(),
            new AddContactField(),
        ]);
    }
}