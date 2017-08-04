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
 * Class Hotel
 * @ORM\Table(name="hotel_rest")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\HotelRepository")
 */
class Hotel
{
    /**
     * @var integer
     * @ORM\Id
     * @ORM\Column(name="id", type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"hotel", "simple"})
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(name="name", type="string")
     * @Groups({"hotel", "simple"})
     */
    private $name;

    /**
     * @var Contact[]
     * @ORM\ManyToMany(targetEntity="Contact", mappedBy="hotels")
     * @Groups("hotel")
     */
    private $contacts;

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
     * @return Hotel
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
     * Constructor
     */
    public function __construct()
    {
        $this->contacts = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add contact
     *
     * @param \AppBundle\Entity\Hotel $contact
     *
     * @return Hotel
     */
    public function addContact(\AppBundle\Entity\Hotel $contact)
    {
        $this->contacts[] = $contact;

        return $this;
    }

    /**
     * Remove contact
     *
     * @param \AppBundle\Entity\Hotel $contact
     */
    public function removeContact(\AppBundle\Entity\Hotel $contact)
    {
        $this->contacts->removeElement($contact);
    }

    /**
     * Get contacts
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getContacts()
    {
        return $this->contacts;
    }
}
