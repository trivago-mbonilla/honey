<?php

namespace GraphAppBundle\Query\Contact;

use Doctrine\ORM\EntityManager;
use GraphAppBundle\Entity\Contact\Contact;
use GraphAppBundle\Entity\Contact\ContactType;
use Youshido\GraphQL\Config\Field\FieldConfig;
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Type\NonNullType;
use Youshido\GraphQL\Type\Scalar\IdType;
use Youshido\GraphQLBundle\Field\AbstractContainerAwareField;

class ContactField extends AbstractContainerAwareField
{
    public function build(FieldConfig $config)
    {
        $config->addArgument("id", new NonNullType(new IdType()));

        $config->setDescription("Get contact by id");
    }

    public function resolve($parent, array $args, ResolveInfo $info)
    {
        /** @var EntityManager $em */
        $em = $this->container->get('doctrine')->getManager();
        $repository = $em->getRepository(Contact::class);

        return $repository->find($args['id']);
    }
    /**
     * @return ContactType
     */
    public function getType()
    {
        return new ContactType();
    }
}