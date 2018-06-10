<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 18/05/2018
 * Time: 12:52
 */

namespace App\MesClasses\Csv;


abstract class CsvWrite
{
    public const FORMAT_DATETIME = 'DateTime';
    public const FORMAT_STRING = 'string';
    public const ECHAPPEMENT = '"';

    public static function writeField($value, $key = ''): string
    {
        $field = '';
        $field .= $key;

        dump($value);
        dump($key);
        echo \gettype($value) . ' ';

        if (\is_string($value)) {
            $field .= self::ECHAPPEMENT . $value . self::ECHAPPEMENT;
        } /* if ($data instanceof \DateTimeImmutable || $data instanceof \DateTime) {
            return $data;
        }*/

        elseif (\is_object($value)) {
            echo \get_class($value);
            if (\get_class($value) === self::FORMAT_DATETIME) {
                $field .= $value->format('d-m-Y');
            }
        } else {
            $field .= $value;
        }


        return $field;
    }
}