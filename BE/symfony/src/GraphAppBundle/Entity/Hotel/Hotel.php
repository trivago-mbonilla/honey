<?php
/**
 * Created by PhpStorm.
 * User: mbonilla
 * Date: 6/23/17
 * Time: 5:11 PM
 */

namespace GraphAppBundle\Entity\Hotel;

use Doctrine\ORM\Mapping as ORM;
use GraphAppBundle\Entity\Contact;

/**
 * Class Hotel
 * @ORM\Table(name="hotel_graph")
 * @ORM\Entity(repositoryClass="GraphAppBundle\Entity\Hotel\HotelRepository")
 */
class Hotel
{
    /**
     * @var integer
     * @ORM\Id
     * @ORM\Column(name="id", type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(name="name", type="string")
     */
    private $name;

    /**
     * @var Contact\Contact[]
     * @ORM\ManyToMany(targetEntity="GraphAppBundle\Entity\Contact\Contact", inversedBy="hotels")
     * @ORM\JoinTable(name="hotel_contact_graph")
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
     * @return Contact\Contact[]
     */
    public function getContacts()
    {
        return $this->contacts;
    }

    /**
     * @param Contact\Contact[] $contacts
     */
    public function setContacts($contacts)
    {
        $this->contacts = $contacts;
    }
    /**
     * Add contact
     *
     * @param Contact\Contact $contact
     *
     * @return Hotel
     */
    public function addContact(Contact\Contact $contact)
    {
        $this->contacts[] = $contact;

        return $this;
    }

    /**
     * Remove contact
     *
     * @param Contact\Contact $contact
     */
    public function removeContact(Contact\Contact $contact)
    {
        $this->contacts->removeElement($contact);
    }
}
