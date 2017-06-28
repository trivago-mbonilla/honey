<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Contact;
use AppBundle\Entity\Hotel;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations as Rest;

/**
 * Class ContactController
 * @package AppBundle\Controller
 * @Rest\View(serializerGroups={"contact", "simple"})
 */
class ContactController extends FOSRestController
{
    /**
     * @ApiDoc(
     *     resource=true,
     *     description="Show all the contacts"
     * )
     *
     * @Rest\Get("/contacts", name="contacts")
     */
    public function showAllAction(EntityManagerInterface $em)
    {
        return $em->getRepository(Contact::class)->findAll();
    }

    /**
     * @ApiDoc(
     *     resource=true,
     *     description="Create new contact",
     *     requirements={
     *       {
     *          "name"="name",
     *          "dataType"="string",
     *          "requirement"="\s+",
     *          "description"="contact name"
     *        },
     *       {
     *          "name"="lastName",
     *          "dataType"="string",
     *          "requirement"="\s+",
     *          "description"="contact last name"
     *        },
     *       {
     *          "name"="phone",
     *          "dataType"="string",
     *          "requirement"="\s+",
     *          "description"="contact phone"
     *        }
     *      },
     *     input="AppBundle\Entity\Contact",
     *     output="AppBundle\Entity\Contact"
     * )
     *
     * @Rest\Get("/contacts/create", name="new_contact")
     */
    public function createAction(EntityManagerInterface $em)
    {
        // or fetch the em via the container
        /** @var EntityManager $em */
        $em = $this->get('doctrine')->getManager();

        $contact = new Contact();
        $contact->setName('tes');
        $contact->setLastName('test');
        $contact->setPhone('test');
        $contact->setCity('test');

        // tells Doctrine you want to (eventually) save the Product (no queries yet)
        $em->persist($contact);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        return $contact;
    }

    /**
     * @Rest\Get("/contacts/create-amount/{amount}")
     */
    public function createAmountAction(EntityManagerInterface $em, $amount)
    {
        foreach (range(1, $amount) as $n) {
            $contact = new Contact();
            $contact->setName('test'.$n);
            $contact->setLastName('test');
            $contact->setPhone('test');
            $contact->setCity('test');

            $em->persist($contact);

            // actually executes the queries (i.e. the INSERT query)
            $em->flush();
        }

        return $em->getRepository(Contact::class)->findAll();
    }

    /**
     * @Rest\Get("/contacts/{contactId}", name="show_contact")
     */
    public function showContactAction($contactId, EntityManagerInterface $em)
    {
        return $em->getRepository(Contact::class)->find($contactId);
    }

    /**
     * @Rest\Get("/contacts/{contactId}/relate-hotel/{hotelId}", name="new_contacts_amount")
     */
    public function relateContactWithHotelsAction($contactId, $hotelId, EntityManagerInterface $em)
    {
        $contact = $em->getRepository(Contact::class)->find($contactId);
        $hotel = $em->getRepository(Hotel::class)->find($hotelId);
        $contact->addHotel($hotel);
        $em->flush();

        return $contact;
    }
}