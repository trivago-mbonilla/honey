<?php

namespace GraphAppBundle\Query\Hotel;

use Doctrine\ORM\EntityManager;
use GraphAppBundle\Entity\Contact\Contact;
use GraphAppBundle\Entity\Hotel\Hotel;
use GraphAppBundle\Entity\Hotel\HotelType;
use Youshido\GraphQL\Config\Field\FieldConfig;
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Type\NonNullType;
use Youshido\GraphQL\Type\Scalar\IdType;
use Youshido\GraphQLBundle\Field\AbstractContainerAwareField;

class AddHotelContactField extends AbstractContainerAwareField
{
    public function build(FieldConfig $config)
    {
        $config->addArgument("hotel_id", new NonNullType(new IdType()));
        $config->addArgument("contact_id", new NonNullType(new IdType()));

        $config->setDescription("add contact to a hotel");
    }

    public function resolve($parent, array $args, ResolveInfo $info)
    {
        /** @var EntityManager $em */
        $em = $this->container->get('doctrine')->getManager();
        $hotelRepository = $em->getRepository(Hotel::class);
        $contactRepository = $em->getRepository(Contact::class);

        $hotel = $hotelRepository->find($args['hotel_id']);
        $contact = $contactRepository->find($args['contact_id']);
        $hotel->addContact($contact);
        $em->flush();

        return $hotel;
    }
    /**
     * @return HotelType
     */
    public function getType()
    {
        return new HotelType();
    }
}