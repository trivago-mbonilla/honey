<?php
/**
 * Created by PhpStorm.
 * User: mbonilla
 * Date: 6/23/17
 * Time: 5:11 PM
 */

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Class Contact
 * @ORM\Table(name="contact_rest")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ContactRepository")
 */
class Contact
{
    /**
     * @var integer
     * @ORM\Id
     * @ORM\Column(name="id", type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"contact", "simple"})
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(name="name", type="string")
     * @Groups({"contact", "simple"})
     */
    private $name;

    /**
     * @var string
     * @ORM\Column(name="last_name", type="string")
     * @Groups("contact")
     */
    private $lastName;

    /**
     * @var string
     * @ORM\Column(name="phone", type="string")
     */
    private $phone;

    /**
     * @var string
     * @ORM\Column(name="city", type="string")
     */
    private $city;

    /**
     * @var Hotel[]
     * @ORM\ManyToMany(targetEntity="Hotel", inversedBy="contacts")
     * @ORM\JoinTable(name="hotel_contact_rest")
     * @Groups("contact")
     */
    private $hotels;

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Contact
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     *
     * @return Contact
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get lastName
     *
     * @return string
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set phone
     *
     * @param string $phone
     *
     * @return Contact
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get phone
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Set city
     *
     * @param string $city
     *
     * @return Contact
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->hotels = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add hotel
     *
     * @param \AppBundle\Entity\Hotel $hotel
     *
     * @return Contact
     */
    public function addHotel(\AppBundle\Entity\Hotel $hotel)
    {
        $this->hotels[] = $hotel;

        return $this;
    }

    /**
     * Remove hotel
     *
     * @param \AppBundle\Entity\Hotel $hotel
     */
    public function removeHotel(\AppBundle\Entity\Hotel $hotel)
    {
        $this->hotels->removeElement($hotel);
    }

    /**
     * Get hotels
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getHotels()
    {
        return $this->hotels;
    }
}
