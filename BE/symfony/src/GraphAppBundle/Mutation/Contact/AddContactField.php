<?php

namespace GraphAppBundle\Mutation\Contact;

use Doctrine\ORM\EntityManager;
use GraphAppBundle\Entity\Contact\Contact;
use GraphAppBundle\Entity\Contact\ContactType;
use Youshido\GraphQL\Config\Field\FieldConfig;
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Type\NonNullType;
use Youshido\GraphQL\Type\Scalar\StringType;
use Youshido\GraphQLBundle\Field\AbstractContainerAwareField;

class AddContactField extends AbstractContainerAwareField
{
    public function build(FieldConfig $config)
    {
        $config->addArguments([
            'name' => new NonNullType(new StringType()),
            'lastName' => new NonNullType(new StringType()),
            'phone' => new StringType(),
            'city' => new StringType(),
        ]);
    }

    public function resolve($value, array $args, ResolveInfo $info)
    {
        /** @var EntityManager $em */
        $em = $this->container->get('doctrine')->getManager();

        $contact = new Contact();
        $contact->setName($args['name']);
        $contact->setLastName($args['lastName']);
        array_key_exists('phone', $args) ? $contact->setPhone($args['phone']) : null;
        array_key_exists('city', $args) ? $contact->setCity($args['city']) : null;

        $em->persist($contact);
        $em->flush();

        return $contact;
    }

    /**
     * @return ContactType
     */
    public function getType()
    {
        return new ContactType();
    }
}