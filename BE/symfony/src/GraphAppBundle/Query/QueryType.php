<?php

namespace GraphAppBundle\Query;

use GraphAppBundle\Query\Contact\ContactField;
use GraphAppBundle\Query\Contact\ContactsField;
use GraphAppBundle\Query\Hotel\HotelField;
use GraphAppBundle\Query\Hotel\HotelsField;
use Youshido\GraphQL\Config\Object\ObjectTypeConfig;
use Youshido\GraphQL\Type\Object\AbstractObjectType;

class QueryType extends AbstractObjectType
{
    /**
     * @param ObjectTypeConfig $config
     */
    public function build($config)
    {
        $config->addFields([
            new HotelField(),
            new HotelsField(),
            new ContactField(),
            new ContactsField(),
        ]);
    }
}