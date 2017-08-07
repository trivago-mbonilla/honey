<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Contact;
use AppBundle\Entity\Hotel;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;

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
     * @Rest\Post("/contacts", name="new_contact")
     */
    public function createAction(Request $request, EntityManagerInterface $em)
    {
        $data = $request->request->all();

        $contact = new Contact();
        $contact->setName($data['name']);
        $contact->setLastName($data['lastName']);
        $contact->setPhone($data['phone']);
        $contact->setCity($data['city']);

        $em->persist($contact);
        $em->flush();

        return $contact;
    }

    /**
     * @Rest\Post("/contacts/create-amount/{amount}")
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
     * @Rest\Post("/contacts/relate-hotel", name="new_contacts_amount")
     */
    public function relateContactWithHotelsAction(Request $request, EntityManagerInterface $em)
    {
        $data = $request->request->all();

        $contact = $em->getRepository(Contact::class)->find($data['contact_id']);
        $hotel = $em->getRepository(Hotel::class)->find($data['hotel_id']);
        $contact->addHotel($hotel);
        $em->flush();

        return $contact;
    }
}