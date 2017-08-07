<?php

namespace GraphAppBundle\Query\Contact;

use Doctrine\ORM\EntityManager;
use GraphAppBundle\Entity\Contact\Contact;
use GraphAppBundle\Entity\Contact\ContactType;
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Type\ListType\ListType;
use Youshido\GraphQLBundle\Field\AbstractContainerAwareField;

class ContactsField extends AbstractContainerAwareField
{
    public function resolve($parent, array $args, ResolveInfo $info)
    {
        /** @var EntityManager $em */
        $em = $this->container->get('doctrine')->getManager();
        $repository = $em->getRepository(Contact::class);

        return $repository->findAll();
    }
    /**
     * @return ListType
     */
    public function getType()
    {
        return new ListType(new ContactType());
    }
}