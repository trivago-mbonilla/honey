<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Hotel;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations as Rest;

/**
 * Class HotelController
 * @package AppBundle\Controller
 * @Rest\View(serializerGroups={"hotel", "simple"})
 */
class HotelController extends FOSRestController
{
    /**
     * @ApiDoc(
     *     resource=true,
     *     description="Show all the hotels"
     * )
     *
     * @Rest\Get("/hotels", name="hotels")
     */
    public function showAllAction(EntityManagerInterface $em)
    {
        return $em->getRepository(Hotel::class)->findAll();
    }

    /**
     * @ApiDoc(
     *     resource=true,
     *     description="Create new hotel",
     *     input="string",
     *     output="AppBundle\Entity\Hotel"
     * )
     *
     * @param Request                $request
     * @param EntityManagerInterface $em
     * @Rest\Post("/hotels/create", name="new_hotel")
     *
     * @return Hotel
     */
    public function createAction(Request $request, EntityManagerInterface $em)
    {
        $name = $request->request->get('name');

        $hotel = new Hotel();
        $hotel->setName($name);

        $em->persist($hotel);
        $em->flush();

        return $hotel;
    }

    /**
     * @ApiDoc(
     *     resource=true,
     *     description="Create amount of hotels",
     *     input="integer",
     *     output="AppBundle\Entity\Hotel[]"
     * )
     *
     * @Rest\Post("/hotels/create-amount/{amount}", name="new_amount")
     * @return Hotel[]
     */
    public function createAmountAction(EntityManagerInterface $em, $amount)
    {
        foreach (range(1, $amount) as $n) {
            $hotel = new Hotel();
            $hotel->setName('hotel_' . $n);

            $em->persist($hotel);
            $em->flush();
        }

        return $em->getRepository(Hotel::class)->findAll();
    }

    /**
     * @ApiDoc(
     *     resource=true,
     *     description="Get hotel",
     *     input="integer",
     *     output="AppBundle\Entity\Hotel"
     * )
     * @Rest\Get("/hotels/{hotelId}", name="get_hotel")
     */
    public function showAction($hotelId, EntityManagerInterface $em)
    {
        return $em->getRepository(Hotel::class)->find($hotelId);
    }

    /**
     * @ApiDoc(
     *     resource=true,
     *     description="Update hotel",
     *     input="integer",
     *     input="string",
     *     output="AppBundle\Entity\Hotel"
     * )
     * @Rest\Put("/hotels/{hotelId}", name="update_hotel")
     */
    public function updateAction($hotelId, Request $request, EntityManagerInterface $em)
    {
        $name = $request->request->get('name');
        $hotel = $em->getRepository(Hotel::class)->find($hotelId);

        if (!$hotel) {
            throw $this->createNotFoundException(
                'No product found for id ' . $hotelId
            );
        }

        $hotel->setName($name);
        $em->flush();

        return $hotel;
    }

    /**
     * @ApiDoc(
     *     resource=true,
     *     description="Delete hotel",
     *     input="integer",
     *     output="AppBundle\Entity\Hotel[]"
     * )
     * @Rest\Delete("/hotels/{hotelId}", name="delete_hotel")
     */
    public function deleteAction($hotelId, EntityManagerInterface $em)
    {
        $hotelRepository = $em->getRepository(Hotel::class);
        $hotel = $hotelRepository->find($hotelId);

        if (!$hotel) {
            throw $this->createNotFoundException(
                'No product found for id ' . $hotelId
            );
        }
        $em->remove($hotel);
        $em->flush();

        return $hotelRepository->findAll();
    }
}