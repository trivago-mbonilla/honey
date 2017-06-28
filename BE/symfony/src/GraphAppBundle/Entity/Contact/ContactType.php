<?php

namespace GraphAppBundle\Entity\Contact;

use GraphAppBundle\Entity\Hotel\HotelType;
use Youshido\GraphQL\Config\Object\ObjectTypeConfig;
use Youshido\GraphQL\Type\ListType\ListType;
use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\Scalar\IdType;
use Youshido\GraphQL\Type\Scalar\StringType;

class ContactType extends AbstractObjectType
{

    /**
     * @param ObjectTypeConfig $config
     */
    public function build($config)
    {
        $config->addFields([
            'id'   => new IdType(),
            'name' => new StringType(),
            'lastName' => new StringType(),
            'phone' => new StringType(),
            'city' => new StringType(),
            'hotels' => new ListType(new HotelType()),
        ]);
    }
}